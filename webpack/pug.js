/**
 * Created by Edward on 22.10.2017.
 */
module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    loader: 'pug-loader',
                    options: {
                        pretty: true
                    }
                }
            ]
        },
    }
};