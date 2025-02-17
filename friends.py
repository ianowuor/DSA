# def solution(P,S):
#     S = sorted(S)
#     total_people = sum(P)
#     total_seats = sum(S)
#     empty_seats = total_seats - total_people

#     if empty_seats > 0:
#         count = 0
#         for i, s in enumerate(S):
#             count += s
#             if count >= empty_seats:
#                 if count == empty_seats:
#                     return len(S) - (i + 1)
#                 else:
#                     return len(S) - i


def solution(P, S):
    S = sorted(S)
    total_people = sum(P)
    total_seats = sum(S)

    if total_seats < total_people:  # Handle the case where there aren't enough seats
        return -1  # Or raise an exception, depending on requirements

    empty_seats = total_seats - total_people

    if empty_seats == 0:  # If no empty seats are possible, all cars are needed.
        return 0

    count = 0
    for i, s in enumerate(S):
        count += s
        if count >= empty_seats:
            return len(S) - (i + 1) if count == empty_seats else len(S) - i


assert solution([2, 3, 1], [1, 2, 3, 4]) == 2
assert solution([1, 1, 1, 1], [1, 1, 1, 1]) == 0
assert solution([5, 2], [3, 4, 1, 2]) == 1
assert solution([1, 2, 3], [1, 2]) == -1
assert solution([2, 2, 2], [1, 1, 1, 5, 5]) == 2
assert solution([2, 2, 2, 2, 2], [1, 1, 1, 5, 5]) == 0

