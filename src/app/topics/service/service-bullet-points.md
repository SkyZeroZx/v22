> These changes introduce the new `@Service` decorator which is a more ergonomic alternative to `@Injectable`. The reason we're adding a new decorator is that `@Injectable` has been around since the beginning of Angular and it has a lot of baggage that adds unnecessary overhead for users that generally want to define a singleton service, available in their entire app. The key differences between `@Service` and `@Injectable` are:
> 1. `@Service` is `providedIn: 'root'` by default. You can opt into providing the service yourself by setting `autoProvided: false` on it.
> 2. `@Service` doesn't allow constructor-based injection, only the `inject` function.
> 3. `@Service` doesn't support the complex type signature of `@Injectable` (`useClass`, `useValue` etc.). Instead it supports a single `factory` function.
> 
> Example:
> 
> ```ts
> import {Service} from '@angular/core';
> import {HttpClient} from '@angular/common/http';
> import {AuthService} from './auth';
>
> @Service()
> export class PostService {
>   private readonly httpClient = inject(HttpClient);
>   private readonly authService = inject(AuthService);
>
>   getUserPosts() {
>     return this.httpClient.get('/api/posts/' + this.authService.userId);
>   }
> }
> ```
> [- Kristiyan Kostadinov, PR that added it](https://github.com/angular/angular/pull/68195)

See the `@Service` and `@Injectable` examples in this component's code for examples