import wikiStore from './stores/wikiStore';
import searchStore from './stores/searchStore';

const useStore = () =>{
    return {wikiStore, searchStore};
}

export default useStore;