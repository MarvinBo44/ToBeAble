package de.neuefische.backend;

import lombok.Data;

@Data
public class Activity {

    private String id;
    private String activityName;
    private boolean isPossibleWhenWarm;
    private boolean isPossibleWhenMiddle;
    private boolean isPossibleWhenCold;
    private boolean isPossibleWhenRaining;
    private boolean isPossibleWithChildren;
    private boolean insideActivity;
    private boolean outsideActivity;

}
