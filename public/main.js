// this is using some native node.js functions
const path = require("path")
const fs = require("fs")

// path to content directory
const dirPath = path.join(__dirname, "../src/content")

// Now we want to create posts as js objects, they're supposed to have
// the metadata inside the md files and it's content

// we also want them in an array, so we can then loop the array and display all the posts
let postList = []

const getPosts = () => {
    // async func to read directory
    fs.readdir(dirPath, (err, files) => {
        //console.log(files.length)
        if (err) {
            return console.log("Failed to list contents of dir 😔: " + err)
        }

        //console.log(files)

        // for each file, open file and do things in there
        files.forEach((file, i) => {
            let obj = {}
            let post
            // read file from directory, then pass file as variable
            fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
                //console.log(contents)
                //console.log(typeof contents)

                // when reading file, it looks for the ---, everything inside them will be the metadata
                const getMetadataIndexes = (accumulator, element, i) => {
                    // if it finds the metadata ---
                    if (/^---/.test(element)) {
                        accumulator.push(i)
                    }
                    return accumulator
                }

                const parseMetadata = ({lines, metaDataIndexes}) => {
                    // if it has the indexes, it should slice
                    if (metaDataIndexes.length > 0) {
                        // [1] is the second number of the metaDataIndexes array (line 4 with the ---)
                        let metaData = lines.slice(metaDataIndexes[0] + 1, metaDataIndexes[1])

                        metaData.forEach(line => {
                            // for each property in obj, in split array pass in key and value for obj
                            // split along the :
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        //console.log(obj) should get object with metadata
                        return obj
                    }
                }

                const parseContent = ({lines, metaDataIndexes}) => {
                    if (metaDataIndexes.length > 0) {
                        // slice lines array after the second ---, after the metadata, after the [5] index
                        // [1] is line 4, +1, the entire length
                        lines = lines.slice(metaDataIndexes[1] + 1, lines.length)
                    }
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
                    return lines.join("\n")
                }

                // split will turn something into an array, here seperated by line breaks
                const lines = contents.split("\n")
                //console.log(lines)

                // we know the array index where the --- are (0 and 4 when title author and date)
                const metaDataIndexes = lines.reduce(getMetadataIndexes, [])
                //console.log(metaDataIndexes) should return 0 and 4

                const metaData = parseMetadata({lines, metaDataIndexes})
                // will also pass in lines and indexes
                const content = parseContent({lines, metaDataIndexes})


                post = {
                    // give an id, becuase we display dynamically with page templates
                    // and it works with react router

                    // this is just so that id starts with 1 instead of 0
                    id: i + 1,
                    // if there's a title ?, then return title :, otherwise
                    title: metaData.title ? metaData.title : "No title given😶",
                    author: metaData.author ? metaData.author : "No author given😶",
                    date: metaData.date ? metaData.date : "No date given😶",
                    content: content ? content : "This post has no content??? Either it's an error or Elias tries to be artsy again."
                }
                // add post to array
                postList.push(post)
                //console.log(postList)

                // we only want this to run once for each file
                // if we're at the last file in the folder
                if (i === files.length - 1) {
                    // stringify content
                    let data = JSON.stringify(postList)
                    // write to this file and add data
                    // writefilesync replaces the data every run
                    fs.writeFileSync("src/posts.json", data)
                }
            })
        })
    })

    //console.log(postList) won't show anything becuase it doesn't wait long enough to loop over the posts
    return
}

getPosts()

// postList Array will later be a JSON file