const CategoryService = {
    // Fetches an array of categories
    getCategoryArray() {
        return fetch(`${process.env.API_ENDPOINT}/categories`, {})
            .then((res) =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            )
            .catch((error) => {
                console.log(error);
            });
    },
    // Fetches stacks within a specific category
    getStacksByCategory(categoryID) {
        return fetch(
            `${process.env.API_ENDPOINT}/categories/${categoryID}/stacks`,
            {}
        )
            .then((res) =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            )
            .catch((error) => {
                console.log(error);
            });
    },
    // Fetches cards within a specific category and stack
    getCardsByCategoryAndStack(categoryID, stackID) {
        return fetch(
            `${process.env.API_ENDPOINT}/categories/${categoryID}/stacks/${stackID}/cards`,
            {}
        ) // API 엔드포인트에 category_id와 stack_id를 포함
            .then((res) =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            )
            .catch((error) => {
                console.log(error);
            });
    },
    // Creates a new category
    newCategory(categoryData) {
        const category_data = JSON.stringify({ categoryData });
        return fetch(`${process.env.API_ENDPOINT}/categories/newCategory`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: category_data,
        })
            .then((res) =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            )
            .catch((error) => {
                console.log(error);
            });
    },
    // Creates a new stack within a specific category
    newStack(categoryID, stackData) {
        const stack_data = JSON.stringify({ stackData });
        return fetch(
            `${process.env.API_ENDPOINT}/categories/${categoryID}/newStack`,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: stack_data,
            }
        )
            .then((res) =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            )
            .catch((error) => {
                console.log(error);
            });
    },
    // Creates a new card within a specific category and stack
    newCard(categoryID, stackID, cardData) {
        const card_data = JSON.stringify(cardData);
        return fetch(
            `${process.env.API_ENDPOINT}/categories/${categoryID}/stacks/${stackID}/cards`,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: card_data,
            }
        )
            .then((res) =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            )
            .catch((error) => {
                console.log(error);
            });
    },
    // Updates an existing category
    updateCategory(categoryID, updatedCategoryData) {
        const updated_category_data = JSON.stringify({ updatedCategoryData });
        return fetch(`${process.env.API_ENDPOINT}/categories/${categoryID}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: updated_category_data,
        })
            .then((res) =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            )
            .catch((error) => {
                console.log(error);
            });
    },
    // Updates an existing stack within a specific category
    updateStack(categoryID, stackID, updatedStackData) {
        const updated_stack_data = JSON.stringify({ updatedStackData });
        return fetch(
            `${process.env.API_ENDPOINT}/categories/${categoryID}/stacks/${stackID}`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: updated_stack_data,
            }
        )
            .then((res) =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            )
            .catch((error) => {
                console.log(error);
            });
    },
    // Updates an existing card within a specific category and stack
    updateCard(categoryID, stackID, cardID, updatedCardData) {
        const updated_card_data = JSON.stringify(updatedCardData);
        return fetch(
            `${process.env.API_ENDPOINT}/categories/${categoryID}/stacks/${stackID}/cards/${cardID}`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: updated_card_data,
            }
        )
            .then((res) =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            )
            .catch((error) => {
                console.log(error);
            });
    },
    // Deletes an existing category
    deleteCategory(categoryID) {
        return fetch(`${process.env.API_ENDPOINT}/categories/${categoryID}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((res) =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            )
            .catch((error) => {
                console.log(error);
            });
    },
    // Deletes an existing stack within a specific category
    deleteStack(categoryID, stackID) {
        return fetch(
            `${process.env.API_ENDPOINT}/categories/${categoryID}/stacks/${stackID}`,
            {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                },
            }
        )
            .then((res) =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            )
            .catch((error) => {
                console.log(error);
            });
    },
    // Deletes an existing card within a specific category and stack
    deleteCard(categoryID, stackID, cardID) {
        return fetch(
            `${process.env.API_ENDPOINT}/categories/${categoryID}/stacks/${stackID}/cards/${cardID}`,
            {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                },
            }
        )
            .then((res) =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            )
            .catch((error) => {
                console.log(error);
            });
    },
};

export default CategoryService;
