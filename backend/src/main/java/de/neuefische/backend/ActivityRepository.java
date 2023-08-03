package de.neuefische.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
@RequiredArgsConstructor
public class ActivityRepository {
    private final List<Activity> activities = new ArrayList<>();

    public Activity addActivity(Activity activity) {
        activity.setId(UUID.randomUUID().toString());
    activities.add(activity);
    return activity;
    }

    public List<Activity> getAllActivities() {
        return activities;
    }
}
