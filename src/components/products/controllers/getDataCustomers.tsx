
export async function getDataCustomers() {
    return (
        fetch(
            "https://jsonplaceholder.typicode.com/users/1/posts",
            {
                method: "GET",
            }
        )
    )
}