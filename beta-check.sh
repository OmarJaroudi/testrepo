set -e

check_files() {
    has_error=0
    for file in "$@" ; do
        if egrep "3.3.0" $file; then
            echo "ERROR: $file should not have a yalc dependency"
            has_error=1
        fi
    done
}

manifest_files=egrep -R 'beta' --include=package.json ./
check_files $manifest_files
exit $has_error