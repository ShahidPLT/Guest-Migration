const fs = require('fs');
const glob = require('fast-glob');
const csvSplitStream = require('csv-split-stream');
var path = require("path");

(async () => {
    const files = await glob(['./errored/guest-*.csv'], { dot: true });
    for(const file of files) {
        const extension = path.extname(file);
        const fileName = path.basename(file,extension);

        csvSplitStream.split(
            fs.createReadStream(file),
            {
              lineLimit: 500
            },
            (index) => fs.createWriteStream(`./errored/split/${fileName}-retry-${index}.csv`)
          )
          .then(csvSplitResponse => {
            console.log('csvSplitStream succeeded.', csvSplitResponse);
          }).catch(csvSplitError => {
            console.log('csvSplitStream failed!', csvSplitError);
          });
    }
})();