const path = require('path')

module.exports = {
    eleventyComputed: {
        // debug: data => { console.log(data) },
        eleventyNavigation: {
            key: data => data.title,
            parent: data => data.parent
        },
        id: data => path.basename(path.dirname(data.page.inputPath)),
        isComponent: ({ id }) => id.startsWith("ed-"),
        npmPackage: data => {
            if (!data.isComponent) { return }
            return require(path.join(__dirname, data.id, 'package.json'))

        },
        title: ({ isComponent, id }) => isComponent ? `<${id}> component` : id
    }
};