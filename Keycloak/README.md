# DOCKER COMPOSE

## Commands

Up with environment

```
docker-compose --env-file environments/local.env up
```

Review the configuration with environment

```
docker-compose --env-file environments/local.env config

```
### Notes

May be needed to set: *-Dkeycloak.profile.feature.upload_scripts=enabled*

## Priority used by Compose to choose which value to use:

- Compose file
- Shell environment variables
- Environment file
- Dockerfile
- Variable is not defined

```
    env_file:
     - ./environment/local.env
    environment:
     - VAR=${env_var}
```


## Syntax rules apply to the **.env** file:

- Compose expects each line in an env file to be in **VAR=val** format.
- Lines beginning with **#** are processed as comments and ignored.
- Blank lines are ignored.
- There is no special handling of *quotation marks*.

## Compose file format
The compose file format is defined on the docker-compose file.
```
version: '2.2'
```
To know what the current recomended version is: https://docs.docker.com/compose/compose-file/compose-versioning/

## Import multiple JSONs
More JSONs can be imported adding a coma and the file path to the KEYCLOAK_IMPORT.
```
KEYCLOAK_IMPORT=${KEYCLOAK_IMPORT_PATH}${KEYCLOAK_IMPORT_FILE_1}**,${KEYCLOAK_IMPORT_PATH}${KEYCLOAK_IMPORT_FILE_2}**
```


