
export async function get({ cf, params, platform }) {

    //platform.env.ARTICLES.

    return {
        body: {
            article: {
                id: JSON.stringify(platform)
            }
        }
    }
}