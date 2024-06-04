const markdownIt = require('markdown-it');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/js");

    eleventyConfig.setLibrary('md', markdownIt());
    eleventyConfig.addCollection("post", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/posts/*.md");
    });

    // Add the html filter
    eleventyConfig.addFilter("html", (value) => {
        // Implement your HTML filtering logic here
        // For example, you can use a library like 'html-minifier' to minify the HTML
        return value;
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};