// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.

// We are NOT going to use module here, we are going to use 
// This is a script tag - index.js.
// I wonder what the relative path for this could be:

// I believe these are all of the options:
// ../data/product-reviews.json
// data/product-reviews.json
// It could be product-reviews.json... but that seems wrong...

fetch('data/product-reviews.json').then(result => {
    return result.text();
}).
    then(result => {
        // That is so odd.. what in the world is making the text center...
        console.log(result);
        const ratings = document.querySelector('.ratings');

        const jsonArray = JSON.parse(result);

        jsonArray.forEach(({ product_id, user_id, rating, content, created_at }) => {
            ratings.innerHTML += '<p>This is a rating that WILL be there </p>';
        });
        console.log(ratings);
    }).
    catch(e => {
        console.log(e);
    });
