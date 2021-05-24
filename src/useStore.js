import articleList from './stores/todo_articleList';
import profileStore from './stores/profileStore';

const useStore = () =>{
    return {articleList, profileStore};
}

export default useStore;