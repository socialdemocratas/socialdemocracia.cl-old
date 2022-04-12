
export async function get({ cf, params, platform }) {

    let result = await platform.env.ARTICLES.list('test');

    return {
        body: {
            article: {
                id: JSON.stringify(result)
            }
        }
    }
}