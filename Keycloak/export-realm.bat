@echo off 
:: 1st argument: directory to export
:: 2nd argument: realm name to export
:: 3rd argument: keycloak container ID
:: 4th argument: port offset - default: 100 - increase if execution fails
docker exec %~3 chmod +x /opt/jboss/keycloak/bin/standalone.sh
start /wait docker exec %~3 /bin/bash /opt/jboss/keycloak/bin/standalone.sh^
 -Djboss.socket.binding.port-offset=%~4^
 -Dkeycloak.migration.realmName=%~2^
 -Dkeycloak.migration.action=export^
 -Dkeycloak.migration.provider=singleFile^
 -Dkeycloak.migration.usersExportStrategy=SAME_FILE^
 -Dkeycloak.migration.file=/tmp/export.json
docker cp %~3:/tmp/export.json %~1/%~2-export.json