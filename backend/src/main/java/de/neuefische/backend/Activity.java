package de.neuefische.backend;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Activity {
    private String id;
    private String activityName;
    private boolean possibleWhenWarm;
    private boolean possibleWhenMiddle;
    private boolean possibleWhenCold;
    private boolean possibleWhenRaining;
    private boolean possibleWithChildren;
    private boolean insideActivity;
    private boolean outsideActivity;
}
