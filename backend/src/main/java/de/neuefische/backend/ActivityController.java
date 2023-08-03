package de.neuefische.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ActivityController {
    private final ActivityService activityService = new ActivityService();
    @PostMapping
    public Activity addActivity(@RequestBody Activity activity){
        return activityService.addActivity(activity);
    }

    @GetMapping
    public List<Activity> getAllActivities(){
        return activityService.getAllActivities();
    }
}
