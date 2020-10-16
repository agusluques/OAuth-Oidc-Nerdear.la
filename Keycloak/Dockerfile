FROM quay.io/keycloak/keycloak:9.0.3

ENV KEYCLOAK_USER admin
ENV KEYCLOAK_PASSWORD admin
ENV KEYCLOAK_IMPORT /opt/jboss/keycloak/imports/nerdearla-realm.json

COPY ./imports /opt/jboss/keycloak/imports/
COPY ./standalone-ha.xml /opt/jboss/keycloak/standalone/configuration/standalone-ha.xml
COPY ./themes/sv-theme /opt/jboss/keycloak/themes/sv-theme
COPY ./themes/sv-right-theme /opt/jboss/keycloak/themes/sv-right-theme
COPY ./themes/sv-gop-theme /opt/jboss/keycloak/themes/sv-gop-theme
COPY ./themes/sv-recru-theme /opt/jboss/keycloak/themes/sv-recru-theme
COPY ./themes/sv-skillmatrix-theme /opt/jboss/keycloak/themes/sv-skillmatrix-theme
COPY ./themes/sv-cvc-theme /opt/jboss/keycloak/themes/sv-cvc-theme

EXPOSE 8080
EXPOSE 8443

CMD ["-b 0.0.0.0 -Dkeycloak.profile.feature.upload_scripts=enabled"]