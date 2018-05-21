Objectives:

- upload an image
- process images: 
    - crop 
    - center 
    - convert file type
- upload processed images to s3
- return processed image URL to clients


Todo:

1. upload image and write to file
    - POST request with image file
    - handle image with writeFile
    - handle image with stream
    - benchmark diff in speed and memory pressure
    - write image to tmp file
2. upload image to aws s3
    - single image
    - multiple images
3. process
    - crop
    - resize
    - optimize
    - convert file type
4. return url of processed image in json
5. load test
