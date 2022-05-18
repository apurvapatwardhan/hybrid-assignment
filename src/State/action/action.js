
const loadingAction = (payload) => {
    return {
        type: 'SET_LOADING', payload
    }
}

const searchAction = (payload) => {
    return {
        type: 'SET_SEARCH', payload
    }
}

const searchResultAction = (payload) => {
    return {
        type:'SET_SEARCH_RESULT',
        payload
    }
}

const articleAction = (payload) => {
    return {
        type:'SET_ARTICLE',
        payload
    }
}

export {searchAction, searchResultAction, loadingAction, articleAction}