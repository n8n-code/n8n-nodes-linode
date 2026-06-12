import type { INodeProperties } from 'n8n-workflow';

export const objectStorageDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					]
				}
			},
			"options": [
				{
					"name": "Get Object Storage Buckets",
					"value": "Get Object Storage Buckets",
					"action": "Object Storage Buckets List",
					"description": "Returns a paginated list of all Object Storage Buckets that you own.\n\n\nThis endpoint is available for convenience. It is recommended that instead you\nuse the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/serviceops/#list-buckets) directly.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/object-storage/buckets"
						}
					}
				},
				{
					"name": "Create Object Storage Bucket",
					"value": "Create Object Storage Bucket",
					"action": "Object Storage Bucket Create",
					"description": "Creates an Object Storage Bucket in the specified cluster.\n\nAccounts with negative balances cannot access this command.\n\nIf the bucket already exists and is owned by you, this endpoint returns a `200` response with that bucket as if it had just been created.\n\nThis endpoint is available for convenience. It is recommended that instead you use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#put-bucket) directly.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/object-storage/buckets"
						}
					}
				},
				{
					"name": "Get Object Storage Bucketin Cluster",
					"value": "Get Object Storage Bucketin Cluster",
					"action": "Object Storage Buckets in Cluster List",
					"description": "Returns a list of Buckets in this cluster belonging to this Account.\n\n\nThis endpoint is available for convenience. It is recommended that instead you\nuse the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#get-bucket) directly.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/object-storage/buckets/{{$parameter[\"clusterId\"]}}"
						}
					}
				},
				{
					"name": "Delete Object Storage Bucket",
					"value": "Delete Object Storage Bucket",
					"action": "Object Storage Bucket Remove",
					"description": "Removes a single bucket.\n\nBucket objects must be removed prior to removing the bucket. While buckets containing objects _may_ be\ndeleted using the [s3cmd command-line tool](/docs/products/storage/object-storage/guides/s3cmd/#delete-a-bucket), such operations\ncan fail if the bucket contains too many objects. The recommended\nway to empty large buckets is to use the [S3 API to configure lifecycle policies](https://docs.ceph.com/en/latest/radosgw/bucketpolicy/#) that\nremove all objects, then delete the bucket.\n\nThis endpoint is available for convenience. It is recommended that instead you\nuse the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#delete-bucket) directly.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/object-storage/buckets/{{$parameter[\"clusterId\"]}}/{{$parameter[\"bucket\"]}}"
						}
					}
				},
				{
					"name": "Get Object Storage Bucket",
					"value": "Get Object Storage Bucket",
					"action": "Object Storage Bucket View",
					"description": "Returns a single Object Storage Bucket.\n\n\nThis endpoint is available for convenience. It is recommended that instead you\nuse the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#get-bucket) directly.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/object-storage/buckets/{{$parameter[\"clusterId\"]}}/{{$parameter[\"bucket\"]}}"
						}
					}
				},
				{
					"name": "Modify Object Storage Bucket Access",
					"value": "Modify Object Storage Bucket Access",
					"action": "Object Storage Bucket Access Modify",
					"description": "Allows changing basic Cross-origin Resource Sharing (CORS) and Access Control Level (ACL) settings.\nOnly allows enabling/disabling CORS for all origins, and/or setting canned ACLs.\n\n\nFor more fine-grained control of both systems, please use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#put-bucket-acl) directly.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/object-storage/buckets/{{$parameter[\"clusterId\"]}}/{{$parameter[\"bucket\"]}}/access"
						}
					}
				},
				{
					"name": "Update Object Storage Bucket Access",
					"value": "Update Object Storage Bucket Access",
					"action": "Object Storage Bucket Access Update",
					"description": "Allows changing basic Cross-origin Resource Sharing (CORS) and Access Control Level (ACL) settings.\nOnly allows enabling/disabling CORS for all origins, and/or setting canned ACLs.\n\n\nFor more fine-grained control of both systems, please use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#put-bucket-acl) directly.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/object-storage/buckets/{{$parameter[\"clusterId\"]}}/{{$parameter[\"bucket\"]}}/access"
						}
					}
				},
				{
					"name": "View Object Storage Bucket ACL",
					"value": "View Object Storage Bucket ACL",
					"action": "Object Storage Object ACL Config View",
					"description": "View an Object's configured Access Control List (ACL) in this Object Storage bucket.\nACLs define who can access your buckets and objects and specify the level of access\ngranted to those users.\n\n\nThis endpoint is available for convenience. It is recommended that instead you\nuse the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/objectops/#get-object-acl) directly.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/object-storage/buckets/{{$parameter[\"clusterId\"]}}/{{$parameter[\"bucket\"]}}/object-acl"
						}
					}
				},
				{
					"name": "Update Object Storage Bucket ACL",
					"value": "Update Object Storage Bucket ACL",
					"action": "Object Storage Object ACL Config Update",
					"description": "Update an Object's configured Access Control List (ACL) in this Object Storage bucket.\nACLs define who can access your buckets and objects and specify the level of access\ngranted to those users.\n\n\nThis endpoint is available for convenience. It is recommended that instead you\nuse the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/objectops/#set-object-acl) directly.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/object-storage/buckets/{{$parameter[\"clusterId\"]}}/{{$parameter[\"bucket\"]}}/object-acl"
						}
					}
				},
				{
					"name": "Get Object Storage Bucket Content",
					"value": "Get Object Storage Bucket Content",
					"action": "Object Storage Bucket Contents List",
					"description": "Returns the contents of a bucket. The contents are paginated using a `marker`,\nwhich is the name of the last object on the previous page.  Objects may\nbe filtered by `prefix` and `delimiter` as well; see Query Parameters for more\ninformation.\n\n\nThis endpoint is available for convenience. It is recommended that instead you\nuse the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/objectops/#get-object) directly.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/object-storage/buckets/{{$parameter[\"clusterId\"]}}/{{$parameter[\"bucket\"]}}/object-list"
						}
					}
				},
				{
					"name": "Create Object Storage Object URL",
					"value": "Create Object Storage Object URL",
					"action": "Object Storage Object URL Create",
					"description": "Creates a pre-signed URL to access a single Object in a bucket. This\ncan be used to share objects, and also to create/delete objects by using\nthe appropriate HTTP method in your request body's `method` parameter.\n\n\nThis endpoint is available for convenience. It is recommended that instead you\nuse the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/)\ndirectly.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/object-storage/buckets/{{$parameter[\"clusterId\"]}}/{{$parameter[\"bucket\"]}}/object-url"
						}
					}
				},
				{
					"name": "Delete Object Storage SSL",
					"value": "Delete Object Storage SSL",
					"action": "Object Storage TLS/SSL Cert Delete",
					"description": "Deletes this Object Storage bucket's user uploaded TLS/SSL certificate and private key.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/object-storage/buckets/{{$parameter[\"clusterId\"]}}/{{$parameter[\"bucket\"]}}/ssl"
						}
					}
				},
				{
					"name": "Get Object Storage SSL",
					"value": "Get Object Storage SSL",
					"action": "Object Storage TLS/SSL Cert View",
					"description": "Returns a boolean value indicating if this bucket has a corresponding TLS/SSL certificate that was\nuploaded by an Account user.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/object-storage/buckets/{{$parameter[\"clusterId\"]}}/{{$parameter[\"bucket\"]}}/ssl"
						}
					}
				},
				{
					"name": "Create Object Storage SSL",
					"value": "Create Object Storage SSL",
					"action": "Object Storage TLS/SSL Cert Upload",
					"description": "Upload a TLS/SSL certificate and private key to be served when you visit your Object Storage bucket via HTTPS.\nYour TLS/SSL certificate and private key are stored encrypted at rest.\n\n\nTo replace an expired certificate, [delete your current certificate](/docs/api/object-storage/#object-storage-tlsssl-cert-delete)\nand upload a new one.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/object-storage/buckets/{{$parameter[\"clusterId\"]}}/{{$parameter[\"bucket\"]}}/ssl"
						}
					}
				},
				{
					"name": "Cancel Object Storage",
					"value": "Cancel Object Storage",
					"action": "Object Storage Cancel",
					"description": "Cancel Object Storage on an Account.\n\n**Warning**: Removes all buckets and their contents from your Account. This data is irretrievable once removed.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/object-storage/cancel"
						}
					}
				},
				{
					"name": "Get Object Storage Clusters",
					"value": "Get Object Storage Clusters",
					"action": "Clusters List",
					"description": "Returns a paginated list of Object Storage Clusters that are available for\nuse.  Users can connect to the clusters with third party clients to create buckets\nand upload objects.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/object-storage/clusters"
						}
					}
				},
				{
					"name": "Get Object Storage Cluster",
					"value": "Get Object Storage Cluster",
					"action": "Cluster View",
					"description": "Returns a single Object Storage Cluster.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/object-storage/clusters/{{$parameter[\"clusterId\"]}}"
						}
					}
				},
				{
					"name": "Get Object Storage Keys",
					"value": "Get Object Storage Keys",
					"action": "Object Storage Keys List",
					"description": "Returns a paginated list of Object Storage Keys for authenticating to\nthe Object Storage S3 API.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/object-storage/keys"
						}
					}
				},
				{
					"name": "Create Object Storage Keys",
					"value": "Create Object Storage Keys",
					"action": "Object Storage Key Create",
					"description": "Provisions a new Object Storage Key on your account.\n\nAccounts with negative balances cannot access this command.\n\n* To create a Limited Access Key with specific permissions, send a `bucket_access` array.\n\n* To create a Limited Access Key without access to any buckets, send an empty `bucket_access` array.\n\n* To create an Access Key with unlimited access to all clusters and all buckets, omit the `bucket_access` array.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/object-storage/keys"
						}
					}
				},
				{
					"name": "Delete Object Storage Key",
					"value": "Delete Object Storage Key",
					"action": "Object Storage Key Revoke",
					"description": "Revokes an Object Storage Key.  This keypair will no longer be usable by third-party clients.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/object-storage/keys/{{$parameter[\"keyId\"]}}"
						}
					}
				},
				{
					"name": "Get Object Storage Key",
					"value": "Get Object Storage Key",
					"action": "Object Storage Key View",
					"description": "Returns a single Object Storage Key provisioned for your account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/object-storage/keys/{{$parameter[\"keyId\"]}}"
						}
					}
				},
				{
					"name": "Update Object Storage Key",
					"value": "Update Object Storage Key",
					"action": "Object Storage Key Update",
					"description": "Updates an Object Storage Key on your account.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/object-storage/keys/{{$parameter[\"keyId\"]}}"
						}
					}
				},
				{
					"name": "Get Object Storage Transfer",
					"value": "Get Object Storage Transfer",
					"action": "Object Storage Transfer View",
					"description": "The amount of outbound data transfer used by your account's Object Storage buckets.\nObject Storage adds 1 terabyte of outbound data transfer to your data transfer pool.\nSee the [Object Storage Overview](/docs/products/storage/object-storage/#pricing)\nguide for details on Object Storage transfer quotas.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/object-storage/transfer"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /object-storage/buckets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Get Object Storage Buckets"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Get Object Storage Buckets"
					]
				}
			}
		},
		{
			"displayName": "POST /object-storage/buckets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage Bucket"
					]
				}
			}
		},
		{
			"displayName": "Acl",
			"name": "acl",
			"type": "options",
			"default": "private",
			"description": "The Access Control Level of the bucket using a canned ACL string. For more fine-grained control of ACLs, use the S3 API directly.\n",
			"options": [
				{
					"name": "Private",
					"value": "private"
				},
				{
					"name": "Public Read",
					"value": "public-read"
				},
				{
					"name": "Authenticated Read",
					"value": "authenticated-read"
				},
				{
					"name": "Public Read Write",
					"value": "public-read-write"
				}
			],
			"routing": {
				"send": {
					"property": "acl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage Bucket"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Cluster",
			"name": "cluster",
			"type": "string",
			"default": "us-east-1",
			"description": "The ID of the Object Storage Cluster where this bucket should be created.\n",
			"routing": {
				"send": {
					"property": "cluster",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage Bucket"
					]
				}
			}
		},
		{
			"displayName": "CORS Enabled",
			"name": "cors_enabled",
			"type": "boolean",
			"default": true,
			"description": "If true, the bucket will be created with CORS enabled for all origins. For more fine-grained controls of CORS, use the S3 API directly.\n",
			"routing": {
				"send": {
					"property": "cors_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage Bucket"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "example-bucket",
			"description": "The name for this bucket. Must be unique in the cluster you are creating the bucket in, or an error will be returned. Labels will be reserved only for the cluster that active buckets are created and stored in. If you want to reserve this bucket's label in another cluster, you must create a new bucket with the same label in the new cluster.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage Bucket"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage Bucket"
					]
				}
			}
		},
		{
			"displayName": "GET /object-storage/buckets/{clusterId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Get Object Storage Bucketin Cluster"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Get Object Storage Bucketin Cluster"
					]
				}
			}
		},
		{
			"displayName": "DELETE /object-storage/buckets/{clusterId}/{bucket}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Delete Object Storage Bucket"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Delete Object Storage Bucket"
					]
				}
			}
		},
		{
			"displayName": "GET /object-storage/buckets/{clusterId}/{bucket}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Get Object Storage Bucket"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Get Object Storage Bucket"
					]
				}
			}
		},
		{
			"displayName": "POST /object-storage/buckets/{clusterId}/{bucket}/access",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Modify Object Storage Bucket Access"
					]
				}
			}
		},
		{
			"displayName": "Acl",
			"name": "acl",
			"type": "options",
			"default": "private",
			"description": "The Access Control Level of the bucket, as a canned ACL string. For more fine-grained control of ACLs, use the S3 API directly.\n",
			"options": [
				{
					"name": "Private",
					"value": "private"
				},
				{
					"name": "Public Read",
					"value": "public-read"
				},
				{
					"name": "Authenticated Read",
					"value": "authenticated-read"
				},
				{
					"name": "Public Read Write",
					"value": "public-read-write"
				},
				{
					"name": "Custom",
					"value": "custom"
				}
			],
			"routing": {
				"send": {
					"property": "acl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Modify Object Storage Bucket Access"
					]
				}
			}
		},
		{
			"displayName": "CORS Enabled",
			"name": "cors_enabled",
			"type": "boolean",
			"default": true,
			"description": "If true, the bucket will be created with CORS enabled for all origins. For more fine-grained controls of CORS, use the S3 API directly.\n",
			"routing": {
				"send": {
					"property": "cors_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Modify Object Storage Bucket Access"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Modify Object Storage Bucket Access"
					]
				}
			}
		},
		{
			"displayName": "PUT /object-storage/buckets/{clusterId}/{bucket}/access",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Update Object Storage Bucket Access"
					]
				}
			}
		},
		{
			"displayName": "Acl",
			"name": "acl",
			"type": "options",
			"default": "private",
			"description": "The Access Control Level of the bucket, as a canned ACL string. For more fine-grained control of ACLs, use the S3 API directly.\n",
			"options": [
				{
					"name": "Private",
					"value": "private"
				},
				{
					"name": "Public Read",
					"value": "public-read"
				},
				{
					"name": "Authenticated Read",
					"value": "authenticated-read"
				},
				{
					"name": "Public Read Write",
					"value": "public-read-write"
				},
				{
					"name": "Custom",
					"value": "custom"
				}
			],
			"routing": {
				"send": {
					"property": "acl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Update Object Storage Bucket Access"
					]
				}
			}
		},
		{
			"displayName": "CORS Enabled",
			"name": "cors_enabled",
			"type": "boolean",
			"default": true,
			"description": "If true, the bucket will be created with CORS enabled for all origins. For more fine-grained controls of CORS, use the S3 API directly.\n",
			"routing": {
				"send": {
					"property": "cors_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Update Object Storage Bucket Access"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Update Object Storage Bucket Access"
					]
				}
			}
		},
		{
			"displayName": "GET /object-storage/buckets/{clusterId}/{bucket}/object-acl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"View Object Storage Bucket ACL"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "The `name` of the object for which to retrieve its Access Control List (ACL). Use the [Object Storage Bucket Contents List](/docs/api/object-storage/#object-storage-bucket-contents-list) endpoint to access all object names in a bucket.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"View Object Storage Bucket ACL"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"View Object Storage Bucket ACL"
					]
				}
			}
		},
		{
			"displayName": "PUT /object-storage/buckets/{clusterId}/{bucket}/object-acl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Update Object Storage Bucket ACL"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Acl",
			"name": "acl",
			"type": "options",
			"default": "public-read",
			"description": "The Access Control Level of the bucket, as a canned ACL string. For more fine-grained control of ACLs, use the S3 API directly.\n",
			"options": [
				{
					"name": "Private",
					"value": "private"
				},
				{
					"name": "Public Read",
					"value": "public-read"
				},
				{
					"name": "Authenticated Read",
					"value": "authenticated-read"
				},
				{
					"name": "Public Read Write",
					"value": "public-read-write"
				},
				{
					"name": "Custom",
					"value": "custom"
				}
			],
			"routing": {
				"send": {
					"property": "acl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Update Object Storage Bucket ACL"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The `name` of the object for which to update its Access Control List (ACL). Use the [Object Storage Bucket Contents List](/docs/api/object-storage/#object-storage-bucket-contents-list) endpoint to access all object names in a bucket.\n",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Update Object Storage Bucket ACL"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Update Object Storage Bucket ACL"
					]
				}
			}
		},
		{
			"displayName": "GET /object-storage/buckets/{clusterId}/{bucket}/object-list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Get Object Storage Bucket Content"
					]
				}
			}
		},
		{
			"displayName": "Marker",
			"name": "marker",
			"description": "The \"marker\" for this request, which can be used to paginate through large buckets. Its value should be the value of the `next_marker` property returned with the last page. Listing bucket contents *does not* support arbitrary page access. See the `next_marker` property in the responses section for more details.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "marker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Get Object Storage Bucket Content"
					]
				}
			}
		},
		{
			"displayName": "Delimiter",
			"name": "delimiter",
			"description": "The delimiter for object names; if given, object names will be returned up to the first occurrence of this character. This is most commonly used with the `/` character to allow bucket transversal in a manner similar to a filesystem, however any delimiter may be used. Use in conjunction with `prefix` to see object names past the first occurrence of the delimiter.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "delimiter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Get Object Storage Bucket Content"
					]
				}
			}
		},
		{
			"displayName": "Prefix",
			"name": "prefix",
			"description": "Filters objects returned to only those whose name start with the given prefix. Commonly used in conjunction with `delimiter` to allow transversal of bucket contents in a manner similar to a filesystem.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "prefix",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Get Object Storage Bucket Content"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Get Object Storage Bucket Content"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Get Object Storage Bucket Content"
					]
				}
			}
		},
		{
			"displayName": "POST /object-storage/buckets/{clusterId}/{bucket}/object-url",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage Object URL"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "content_type",
			"type": "string",
			"default": null,
			"description": "The expected `Content-type` header of the request this signed URL will be valid for.  If provided, the `Content-type` header _must_ be sent with the request when this URL is used, and _must_ be the same as it was when the signed URL was created. Required for all methods *except* \"GET\" or \"DELETE\".\n",
			"routing": {
				"send": {
					"property": "content_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage Object URL"
					]
				}
			}
		},
		{
			"displayName": "Expires In",
			"name": "expires_in",
			"type": "number",
			"default": null,
			"description": "How long this signed URL will be valid for, in seconds.  If omitted, the URL will be valid for 3600 seconds (1 hour).\n",
			"routing": {
				"send": {
					"property": "expires_in",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage Object URL"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Method",
			"name": "method",
			"type": "string",
			"default": "GET",
			"description": "The HTTP method allowed to be used with the pre-signed URL.",
			"routing": {
				"send": {
					"property": "method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage Object URL"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "example",
			"description": "The name of the object that will be accessed with the pre-signed URL. This object need not exist, and no error will be returned if it doesn't. This behavior is useful for generating pre-signed URLs to upload new objects to by setting the `method` to \"PUT\".\n",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage Object URL"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage Object URL"
					]
				}
			}
		},
		{
			"displayName": "DELETE /object-storage/buckets/{clusterId}/{bucket}/ssl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Delete Object Storage SSL"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Delete Object Storage SSL"
					]
				}
			}
		},
		{
			"displayName": "GET /object-storage/buckets/{clusterId}/{bucket}/ssl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Get Object Storage SSL"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Get Object Storage SSL"
					]
				}
			}
		},
		{
			"displayName": "POST /object-storage/buckets/{clusterId}/{bucket}/ssl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage SSL"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Certificate",
			"name": "certificate",
			"type": "string",
			"default": "-----BEGIN CERTIFICATE-----\nCERTIFICATE_INFORMATION\n-----END CERTIFICATE-----",
			"description": "Your Base64 encoded and PEM formatted SSL certificate.\n\nLine breaks must be represented as \"\\n\" in the string for requests (but not when using the Linode CLI)\n",
			"routing": {
				"send": {
					"property": "certificate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage SSL"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Private Key",
			"name": "private_key",
			"type": "string",
			"default": "-----BEGIN PRIVATE KEY-----\nPRIVATE_KEY_INFORMATION\n-----END PRIVATE KEY-----",
			"description": "The private key associated with this TLS/SSL certificate.\n\nLine breaks must be represented as \"\\n\" in the string for requests (but not when using the Linode CLI)\n",
			"routing": {
				"send": {
					"property": "private_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage SSL"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage SSL"
					]
				}
			}
		},
		{
			"displayName": "POST /object-storage/cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Cancel Object Storage"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Cancel Object Storage"
					]
				}
			}
		},
		{
			"displayName": "GET /object-storage/clusters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Get Object Storage Clusters"
					]
				}
			}
		},
		{
			"displayName": "GET /object-storage/clusters/{clusterId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Get Object Storage Cluster"
					]
				}
			}
		},
		{
			"displayName": "GET /object-storage/keys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Get Object Storage Keys"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Get Object Storage Keys"
					]
				}
			}
		},
		{
			"displayName": "POST /object-storage/keys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage Keys"
					]
				}
			}
		},
		{
			"displayName": "Access Key",
			"name": "access_key",
			"type": "string",
			"default": "KVAKUTGBA4WTR2NSJQ81",
			"description": "This keypair's access key. This is not secret.",
			"routing": {
				"send": {
					"property": "access_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage Keys"
					]
				}
			}
		},
		{
			"displayName": "Bucket Access",
			"name": "bucket_access",
			"type": "json",
			"default": "[\n  {\n    \"bucket_name\": \"example-bucket\",\n    \"cluster\": \"ap-south-1\",\n    \"permissions\": \"read_only\"\n  }\n]",
			"description": "Defines this key as a Limited Access Key. Limited Access Keys restrict this Object Storage key's access to only the bucket(s) declared in this array and define their bucket-level permissions.\n\n\n  Limited Access Keys can:\n\n  * [list all buckets](/docs/api/object-storage/#object-storage-buckets-list) available on this Account, but cannot perform any actions on a bucket unless it has access to the bucket.\n\n\n  * [create new buckets](/docs/api/object-storage/#object-storage-bucket-create), but do not have any access to the buckets it creates, unless explicitly given access to them.\n\n\n  **Note:** You can create an Object Storage Limited Access Key without access to any buckets.\n  This is achieved by sending a request with an empty `bucket_access` array.\n\n\n  **Note:** If this field is omitted, a regular unlimited access key is issued.\n",
			"routing": {
				"send": {
					"property": "bucket_access",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage Keys"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 123,
			"description": "This keypair's unique ID",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage Keys"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "my-key",
			"description": "The label given to this key. For display purposes only.",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage Keys"
					]
				}
			}
		},
		{
			"displayName": "Limited",
			"name": "limited",
			"type": "boolean",
			"default": true,
			"description": "Whether or not this key is a limited access key. Will return `false` if this key grants full access to all buckets on the user's account.",
			"routing": {
				"send": {
					"property": "limited",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage Keys"
					]
				}
			}
		},
		{
			"displayName": "Secret Key",
			"name": "secret_key",
			"type": "string",
			"default": "OiA6F5r0niLs3QA2stbyq7mY5VCV7KqOzcmitmHw",
			"description": "This keypair's secret key. Only returned on key creation.",
			"routing": {
				"send": {
					"property": "secret_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage Keys"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Create Object Storage Keys"
					]
				}
			}
		},
		{
			"displayName": "DELETE /object-storage/keys/{keyId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Delete Object Storage Key"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Delete Object Storage Key"
					]
				}
			}
		},
		{
			"displayName": "GET /object-storage/keys/{keyId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Get Object Storage Key"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Get Object Storage Key"
					]
				}
			}
		},
		{
			"displayName": "PUT /object-storage/keys/{keyId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Update Object Storage Key"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "my-key",
			"description": "The label for this keypair, for display purposes only.",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Update Object Storage Key"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Update Object Storage Key"
					]
				}
			}
		},
		{
			"displayName": "GET /object-storage/transfer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Get Object Storage Transfer"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Object Storage"
					],
					"operation": [
						"Get Object Storage Transfer"
					]
				}
			}
		},
];
