import articleList from './stores/todo_articleList';
import photoProfile from './stores/todo_photoProfile';

const useStore = () =>{
    return {articleList, photoProfile};
}

export default useStore;