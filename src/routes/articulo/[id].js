
export async function get({ params }) {
    return {
        body: {
            article: {
                id: params.id
            }
        }
    }
}