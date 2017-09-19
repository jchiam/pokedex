PRODUCTION=default

prebuild:
	yarn
	cd functions && yarn && cd ..

build:
	node_modules/.bin/webpack --config webpack.prod.config.js --progress -p

deploy-production:
	firebase use $(PRODUCTION)
	firebase deploy --token "$(TOKEN)"
