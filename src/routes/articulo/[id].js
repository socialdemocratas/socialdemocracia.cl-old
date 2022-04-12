
export async function get({ cf, params, platform }) {

    await platform.env.ARTICLES.list('test');

    return {
        body: {
            article: {
                id: JSON.stringify(platform)
            }
        }
    }
}