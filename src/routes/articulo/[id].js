
export async function get({ cf, params, platform }) {

    await platform.env.ARTICLES.put('test', 'hola');

    return {
        body: {
            article: {
                id: JSON.stringify(platform)
            }
        }
    }
}