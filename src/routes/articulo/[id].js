
export async function get({ cf, params, platform }) {

    const result = await platform.env.ARTICLES.list({"prefix": 't'});

    return {
        body: {
            article: {
                id: JSON.stringify(result)
            }
        }
    }
}