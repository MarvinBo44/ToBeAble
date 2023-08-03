package de.neuefische.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ActivityService {
    private final ActivityRepository activityRepository = new ActivityRepository();

    public Activity addActivity(Activity activity) {
        return activityRepository.addActivity(activity);
    }

    public List<Activity> getAllActivities() {
        return activityRepository.getAllActivities();
    }
}
