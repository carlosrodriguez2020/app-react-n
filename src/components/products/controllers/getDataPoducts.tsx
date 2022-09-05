
export async function getDataProducts() {
    return (
        fetch(
            "https://jsonplaceholder.typicode.com/users/1/posts",
            {
                method: "GET",
            }
        )
    )
}