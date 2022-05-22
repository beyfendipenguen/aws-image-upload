package com.beyfendipenguen.awsimageupload.bucket;

public enum BucketName {

    PROFILE_IMAGE("beyfendipenguen-image-upload");

    private final String bucketName;

    BucketName(String bucketName) {
        this.bucketName = bucketName;
    }

    public String getBucketName() {
        return bucketName;
    }
}
