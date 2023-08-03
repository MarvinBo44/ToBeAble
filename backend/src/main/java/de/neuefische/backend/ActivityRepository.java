package de.neuefische.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class ActivityRepository {
    private final List<Activity> activities = new ArrayList<>();

    public void addActivity(Activity activity) {
        activities.add(activity);
    }

    public List<Activity> getAllActivities() {
        return activities;
    }
}
