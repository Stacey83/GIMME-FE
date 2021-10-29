export const allProjects = [
    {
        id: 1,
        title: "Project One",
        goal: 150,
        image: "https://via.placeholder.com/300.jpg",
        is_open: false,
        date_created: "2020-03-20T14:22:23.382748Z",
        owner: 1,
    },
    {
        id: 2,
        title: "Project Two",
        description: "The second project.",
        goal: 150,
        image: "https://via.placeholder.com/300.jpg",
        is_open: false,
        date_created: "2020-03-20T18:28:23.382748Z",
        owner: 1,
    },
    {
        id: 3,
        title: "Project Three",
        description: "The third project.",
        goal: 150,
        image: "https://via.placeholder.com/300.jpg",
        is_open: false,
        date_created: "2020-02-20T14:28:23.382748Z",
        owner: 1,
    },
]

export const oneProject = [
    {
        id: 1,
        title: "Project One",
        goal: 150,
        image: "https://via.placeholder.com/300.jpg",
        is_open: false,
        date_created: "2020-03-20T14:22:23.382748Z",
        owner: 1,
        pledges: [
            {
                id: 1,
                amount: 100,
                comment: "A comment for the pledge",
                anonymous: false,
                supporter: 3,
                project_id: 1,
            },
        ],
    },
]