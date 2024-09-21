#!/bin/bash
echo "Running migration"
yarn run migrate & PID=$!
# Wait for migration to finish
wait $PID

echo "Starting server..."
yarn start  & PID=$!

wait $PID