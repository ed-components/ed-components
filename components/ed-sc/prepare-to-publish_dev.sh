#!/bin/bash -
#===============================================================================
# Change la version dans le package.json
# Créé un tag v...
# Pousse vers github ou l'action de release sera lancée
#===============================================================================

set -o nounset                              # Treat unset variables as an error

npm run lint
# TODO auto incrémentation
echo "================"
echo "Version actuelle"
echo `grep '"version": ' package.json`
echo
echo "Nouvelle version souhaitée?"
read -p "1.x.x: " VERSION
echo $VERSION
read -p "Etes vous sur: OUI?    " rep

if [ $rep != "OUI" ]
then
        echo "Abort release"
else
    echo "Lancement de la release"
    yarn build
    sed -i "s/\(\"version\": \"\).*\(\",$\)/\1$VERSION\2/" package.json
    git commit -am "Publish v$VERSION de ed-sc"
    git push
    npm publish
fi
