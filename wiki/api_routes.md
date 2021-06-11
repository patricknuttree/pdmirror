## Database Schema and API Routes

![Database Schema](https://github.com/patricknuttree/pdmirror/blob/main/wiki/wiki_images/schema1.png)


* Police Department:
    - GET /api/pds/ -> Allows users to view a department and the reflections on it.

* Reflections
    - POST /api/pds/:id/reflections -> Allows a user to create a post on a police department.
    - PUT /api/department/:id/post/:id -> Allows a user to update their post.
    - GET /api/pds/:id/reflections -> This will allow all users to view reflections on a police department.

* Comments

    - GET /api/comments/reflection/:id/comments -> Allows a user to view all comments on a reflection.
    - POST /api/comments/reflection/:id/comments -> Allows users to add a comment to a reflection. 
    - PUT /api/comments/reflection/:id/comments-> Allows users to update their comment or comments on a post.
    - DELETE /api/comments/reflection/<int:id>/comments/<int:comment_id -> Allows users to delete their comment or comments on a post. 