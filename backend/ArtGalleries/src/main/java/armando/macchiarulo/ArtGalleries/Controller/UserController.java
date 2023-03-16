package armando.macchiarulo.ArtGalleries.Controller;

import armando.macchiarulo.ArtGalleries.Entity.User;
import armando.macchiarulo.ArtGalleries.Repository.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Integer id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            return user.get();
        }
    }
    @PostMapping
    public User createUser(@Valid @RequestBody User user){
        if (user.getId() == 0) {
            return userRepository.save(user);
        }else {
            throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED);
        }
    }
    @PutMapping("/{id}")
    public User updateUser(@Valid @RequestBody User user, @PathVariable("id") Integer id){
        Optional<User> result = userRepository.findById(id);
        if(result.isPresent()){
            user.setId(id);
            return userRepository.save(user);

        }else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") Integer id){
        Optional<User> result = userRepository.findById(id);
        if(result.isPresent()){
           userRepository.deleteById(id);
        }else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

}
