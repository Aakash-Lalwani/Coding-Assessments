# JWT Authentication Service

Spring Boot service that authenticates HTTP **Basic** credentials and returns a signed **JWT**.

## Why it wasn't built/run in this environment
This was generated in a sandboxed container without access to Maven Central,
so the build couldn't be executed here to produce a live screenshot. The
code is complete and standard Spring Boot; building locally takes about a
minute. Steps below produce your proof-of-work output.

## Requirements
- Java 17+
- Maven 3.8+ (or use the included tooling if you have an IDE)

## How the three required steps map to the code

| Step | File |
|---|---|
| 1. Auth controller + SecurityConfig | `controller/AuthenticationController.java`, `config/SecurityConfig.java` |
| 2. Read & decode `Authorization` header | `AuthenticationController.authenticate(...)` — manually parses `Basic base64(user:pwd)` |
| 3. Generate token for the retrieved user | `service/JwtUtil.java` (`generateToken`), called after `UserDetailsService.loadUserByUsername` |

Additional pieces included beyond the minimum ask, for completeness:
- `security/JwtRequestFilter.java` — validates `Authorization: Bearer <jwt>` on all other endpoints so the token is actually usable, not just issued.
- `controller/HelloController.java` — a protected `/hello` endpoint to prove the issued JWT works.
- `AuthenticationControllerTest.java` — JUnit/MockMvc tests for success, bad password, and missing header cases.
- Demo user `user`/`pwd` is defined as an in-memory `UserDetailsService` (BCrypt-hashed) in `SecurityConfig` — swap for a DB-backed implementation in production.

## Build

```bash
cd jwt-auth-service
mvn clean package
```

## Run

```bash
mvn spring-boot:run
# or
java -jar target/jwt-auth-service-0.0.1-SNAPSHOT.jar
```
Service starts on **port 8090** (configured in `application.properties`) to match the required curl example.

## Verify — Step 1: get a token

```bash
curl -s -u user:pwd http://localhost:8090/authenticate
```

Expected response:
```json
{"token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNzUyMDAwMDAwLCJleHAiOjE3NTIwMDEyMDB9.<signature>"}
```

## Verify — Step 2: bad credentials are rejected

```bash
curl -i -u user:wrongpwd http://localhost:8090/authenticate
# -> HTTP/1.1 401
```

## Verify — Step 3: use the token against a protected endpoint

```bash
TOKEN=$(curl -s -u user:pwd http://localhost:8090/authenticate | python3 -c "import sys,json;print(json.load(sys.stdin)['token'])")

curl -s -H "Authorization: Bearer $TOKEN" http://localhost:8090/hello
# -> {"message":"Hello, user! Your JWT is valid."}

curl -i http://localhost:8090/hello
# -> HTTP/1.1 401 (no token)
```

## Run the automated tests

```bash
mvn test
```
Covers: valid credentials → 200 + token present; wrong password → 401; missing header → 401.

## Security notes for production use
- Move `jwt.secret` out of `application.properties` into an environment variable / secrets manager (the property already supports `${JWT_SECRET:...}` override).
- Replace the in-memory `UserDetailsService` with a real user store (JPA/LDAP/etc.).
- Consider shorter token expiry + refresh tokens for anything beyond a demo.
- Serve over HTTPS — Basic Auth credentials and Bearer tokens are both plaintext-equivalent over HTTP.
