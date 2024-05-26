import { PhotosService, PostService, TodoService } from './02-open-close-b';
import { HttpClient } from './02-open-close-c';

(async () => {

    const httpClien = new HttpClient;


    const todoService = new TodoService(httpClien);
    const postService = new PostService(httpClien);
    const photosService = new PhotosService(httpClien);

    const todos = await todoService.getTodoItems();
    const posts = await postService.getPosts();
    const photos = await photosService.getPhotos();
    
    
    console.log({ todos, posts, photos });
    

})();