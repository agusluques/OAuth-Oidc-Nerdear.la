@echo off 
:: 1st argument: file to import
:: 2nd argument: realm name to import
:: 3rd argument: true/false if it's a new realm
:: 4th argument: keycloak container ID
set notexists=%3
docker cp %~1 %~4:/tmp/import.json
docker exec %~4 /bin/bash /opt/jboss/keycloak/bin/kcadm.sh config credentials --server http://localhost:8080/auth --realm master --user admin --password admin
IF "%notexists%"=="true" (
	docker exec %~4 /bin/bash /opt/jboss/keycloak/bin/kcadm.sh create realms -s realm=%~2 -s enabled=true
) ELSE ( 
	docker exec %~4 /bin/bash /opt/jboss/keycloak/bin/kcadm.sh create clear-realm-cache -r %2 -s realm=%2
	docker exec %~4 /bin/bash /opt/jboss/keycloak/bin/kcadm.sh create clear-user-cache -r %2 -s realm=%2
	docker exec %~4 /bin/bash /opt/jboss/keycloak/bin/kcadm.sh create clear-keys-cache -r %2 -s realm=%2
)
docker exec %~4 /bin/bash /opt/jboss/keycloak/bin/kcadm.sh create partialImport -r %~2 -f /tmp/import.json -s ifResourceExists=OVERWRITE