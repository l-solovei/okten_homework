def new_range(start: int, stop=None, step=1):
    if stop == None:
        stop = start
        start = 0

    result = []

    if start < stop and step > 0:
        while start < stop:
            result.append(start)
            start += step

    elif start > stop and step < 0:
        while stop < start:
            result.append(stop)
            stop -= step

    elif start < stop and step < 0:
        while start < stop:
            result.append(stop)
            stop += step

    return result

print(new_range(0, 10, -2))