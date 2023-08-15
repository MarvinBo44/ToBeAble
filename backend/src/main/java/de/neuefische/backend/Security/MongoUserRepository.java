package de.neuefische.backend.Security;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MongoUserRepository extends MongoRepository <MongoUser, String> {

    Optional<MongoUser> findMongoUserByUsername (String username);

}
