package de.neuefische.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ActivityService {
    private final ActivityRepository activityRepository = new ActivityRepository();

    public void addActivity(Activity activity) {
        activityRepository.addActivity(activity);
    }

    public List<Activity> getAllActivities() {
        return activityRepository.getAllActivities();
    }
}
