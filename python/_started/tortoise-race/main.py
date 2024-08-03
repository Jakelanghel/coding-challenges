def race(v1, v2, g):
    if v1 >= v2:
        return None  # B can never catch A if A's speed is greater than or equal to B's speed

    # Calculate the time in hours it takes B to catch A
    time_hours = g / (v2 - v1)
    
    # Convert time to hours, minutes, and seconds
    hours = int(time_hours)
    minutes = int((time_hours - hours) * 60)
    seconds = int((time_hours * 3600) % 60)
    
    return [hours, minutes, seconds]

# Example usage:
v1 = 720  # Speed of tortoise A in feet per hour
v2 = 850  # Speed of tortoise B in feet per hour
g = 70    # Lead of tortoise A in feet