import { api } from "./_api";

export const get = async (request) => {
    const response = await api(
        request,
        `wp/v2/exhibition/?slug=${request.params.slug}`
    )
}