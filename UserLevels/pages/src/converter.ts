
// Referenced in binding to switch StackedView
export function getUserId(value) {
  return value.id;
}

// Referenced in binding to disable Button when user lower as operator
export function getDisabled(value) {
  let disabled = true
  if (value.id > 1){
    disabled = false
  }
  return disabled;
}
