FROM mongo

COPY heros.json /heros.json

CMD mongoimport --host mongo-db --db herosdb --collection heros --drop --type json --file /heros.json --jsonArray