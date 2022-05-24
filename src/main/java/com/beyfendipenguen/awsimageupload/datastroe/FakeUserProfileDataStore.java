package com.beyfendipenguen.awsimageupload.datastroe;

import com.beyfendipenguen.awsimageupload.profile.UserProfile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class FakeUserProfileDataStore {
    private static final List<UserProfile> USER_PROFILES = new ArrayList<>();
    static {
        USER_PROFILES.add(new UserProfile(UUID.fromString("145e897f-a357-49d9-8e4e-0d6e898756c8"), "John Doe",null));
        USER_PROFILES.add(new UserProfile(UUID.fromString("6e234ba9-d2d7-4b03-b7b7-f0b5765767ee"), "Michelle Doe",null));
    }

    public static List<UserProfile> getUserProfiles() {
        return USER_PROFILES;
    }
}
