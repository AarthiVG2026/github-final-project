#!/bin/bash

# Simple Interest Calculator
# Formula: SI = (P * R * T) / 100

echo "Welcome to the Simple Interest Calculator!"

# Ask for the Principal Amount
echo "Enter the principal amount (P):"
read p

# Ask for the Annual Rate of Interest
echo "Enter the annual rate of interest (R):"
read r

# Ask for the Time Period in Years
echo "Enter the time period in years (T):"
read t

# Calculate Simple Interest
# We use bc for floating-point calculation if available, otherwise fallback to standard arithmetic.
if command -v bc &> /dev/null; then
    si=$(echo "scale=2; ($p * $r * $t) / 100" | bc)
else
    # Fallback to integer arithmetic
    si=$(( (p * r * t) / 100 ))
fi

echo "The Simple Interest is: $si"
