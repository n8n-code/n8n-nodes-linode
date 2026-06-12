import type { INodeProperties } from 'n8n-workflow';

export const imagesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					]
				}
			},
			"options": [
				{
					"name": "Get Images",
					"value": "Get Images",
					"action": "Images List",
					"description": "Returns a paginated list of Images.\n\n* **Public** Images have IDs that begin with \"linode/\". These distribution images are generally available to\nall users.\n\n* **Private** Images have IDs that begin with \"private/\". These Images are Account-specific and only\naccessible to Users with appropriate [Grants](/docs/api/account/#users-grants-view).\n\n* To view only public Images, call this endpoint with or without authentication. To view private Images as well, call this endpoint with authentication.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/images"
						}
					}
				},
				{
					"name": "Create Image",
					"value": "Create Image",
					"action": "Image Create",
					"description": "Captures a private gold-master Image from a Linode Disk.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/images"
						}
					}
				},
				{
					"name": "POST Images Upload",
					"value": "POST Images Upload",
					"action": "Image Upload",
					"description": "Initiates an Image upload.\n\nThis endpoint creates a new private Image object and returns it along\nwith the URL to which image data can be uploaded.\n\n- Image data must be uploaded within 24 hours of creation or the\nupload will be cancelled and the image deleted.\n\n- Image uploads should be made as an HTTP PUT request to the URL returned in the `upload_to`\nresponse parameter, with a `Content-type: application/octet-stream` header included in the\nrequest. For example:\n\n      curl -v \\\n        -H \"Content-Type: application/octet-stream\" \\\n        --upload-file example.img.gz \\\n        $UPLOAD_URL \\\n        --progress-bar \\\n        --output /dev/null\n\n- Uploaded image data should be compressed in gzip (`.gz`) format. The uncompressed disk should be in raw\ndisk image (`.img`) format. A maximum compressed file size of 5GB is supported for upload at this time.\n\n**Note:** To initiate and complete an Image upload in a single step, see our guide on how to [Upload an Image](/docs/products/tools/images/guides/upload-an-image/) using Cloud Manager or the Linode CLI `image-upload` plugin.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/images/upload"
						}
					}
				},
				{
					"name": "Delete Image",
					"value": "Delete Image",
					"action": "Image Delete",
					"description": "Deletes a private Image you have permission to `read_write`.\n\n\n**Deleting an Image is a destructive action and cannot be undone.**\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/images/{{$parameter[\"imageId\"]}}"
						}
					}
				},
				{
					"name": "Get Image",
					"value": "Get Image",
					"action": "Image View",
					"description": "Get information about a single Image.\n\n* **Public** Images have IDs that begin with \"linode/\". These distribution images are generally available to\nall users.\n\n* **Private** Images have IDs that begin with \"private/\". These Images are Account-specific and only\naccessible to Users with appropriate [Grants](/docs/api/account/#users-grants-view).\n\n* To view a public Image, call this endpoint with or without authentication. To view a private Image, call this endpoint with authentication.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/images/{{$parameter[\"imageId\"]}}"
						}
					}
				},
				{
					"name": "Update Image",
					"value": "Update Image",
					"action": "Image Update",
					"description": "Updates a private Image that you have permission to `read_write`.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/images/{{$parameter[\"imageId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /images",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Get Images"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Get Images"
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
						"Images"
					],
					"operation": [
						"Get Images"
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
						"Images"
					],
					"operation": [
						"Get Images"
					]
				}
			}
		},
		{
			"displayName": "POST /images",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Create Image"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "A detailed description of this Image.\n",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Create Image"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Disk ID",
			"name": "disk_id",
			"type": "number",
			"default": 42,
			"description": "The ID of the Linode Disk that this Image will be created from.\n",
			"routing": {
				"send": {
					"property": "disk_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Create Image"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "",
			"description": "A short title of this Image. Defaults to the label of the Disk it is being created from if not provided.\n",
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
						"Images"
					],
					"operation": [
						"Create Image"
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
						"Images"
					],
					"operation": [
						"Create Image"
					]
				}
			}
		},
		{
			"displayName": "POST /images/upload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"POST Images Upload"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "This is an example image in the docs.",
			"description": "Description for the uploaded Image.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"POST Images Upload"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "my-image-label",
			"description": "Label for the uploaded Image.",
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
						"Images"
					],
					"operation": [
						"POST Images Upload"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Region",
			"name": "region",
			"type": "string",
			"default": "eu-central",
			"description": "The region to upload to. Once uploaded, the Image can be used in any region.\n",
			"routing": {
				"send": {
					"property": "region",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"POST Images Upload"
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
						"Images"
					],
					"operation": [
						"POST Images Upload"
					]
				}
			}
		},
		{
			"displayName": "DELETE /images/{imageId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Delete Image"
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
						"Images"
					],
					"operation": [
						"Delete Image"
					]
				}
			}
		},
		{
			"displayName": "GET /images/{imageId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Get Image"
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
						"Images"
					],
					"operation": [
						"Get Image"
					]
				}
			}
		},
		{
			"displayName": "PUT /images/{imageId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Update Image"
					]
				}
			}
		},
		{
			"displayName": "Created",
			"name": "created",
			"type": "string",
			"default": "2021-08-14T22:44:02",
			"description": "When this Image was created.",
			"routing": {
				"send": {
					"property": "created",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Update Image"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "created_by",
			"type": "string",
			"default": "linode",
			"description": "The name of the User who created this Image, or \"linode\" for public Images.\n",
			"routing": {
				"send": {
					"property": "created_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Update Image"
					]
				}
			}
		},
		{
			"displayName": "Deprecated",
			"name": "deprecated",
			"type": "boolean",
			"default": false,
			"description": "Whether or not this Image is deprecated. Will only be true for deprecated public Images.\n",
			"routing": {
				"send": {
					"property": "deprecated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Update Image"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Example Image description.",
			"description": "A detailed description of this Image.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Update Image"
					]
				}
			}
		},
		{
			"displayName": "Eol",
			"name": "eol",
			"type": "string",
			"default": "2026-07-01T04:00:00",
			"description": "The date of the public Image's planned end of life. `None` for private Images.\n",
			"routing": {
				"send": {
					"property": "eol",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Update Image"
					]
				}
			}
		},
		{
			"displayName": "Expiry",
			"name": "expiry",
			"type": "string",
			"default": null,
			"description": "Only Images created automatically from a deleted Linode (type=automatic) will expire.\n",
			"routing": {
				"send": {
					"property": "expiry",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Update Image"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "linode/debian11",
			"description": "The unique ID of this Image.",
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
						"Images"
					],
					"operation": [
						"Update Image"
					]
				}
			}
		},
		{
			"displayName": "Is Public",
			"name": "is_public",
			"type": "boolean",
			"default": true,
			"description": "True if the Image is a public distribution image. False if Image is private Account-specific Image.",
			"routing": {
				"send": {
					"property": "is_public",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Update Image"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "Debian 11",
			"description": "A short description of the Image.\n",
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
						"Images"
					],
					"operation": [
						"Update Image"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"type": "number",
			"default": 2500,
			"description": "The minimum size this Image needs to deploy. Size is in MB.\n",
			"routing": {
				"send": {
					"property": "size",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Update Image"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "available",
			"description": "The current status of this Image.\n\nOnly Images in an \"available\" status can be deployed. Images in a \"creating\" status are being created from a Linode Disk, and will become \"available\" shortly. Images in a \"pending_upload\" status are waiting for data to be [uploaded](/docs/api/images/#image-upload), and become \"available\" after the upload and processing are complete.\n\nThe \"+order_by\" and \"+order\" operators are not available for [filtering](/docs/api/#filtering-and-sorting) on this key.\n",
			"options": [
				{
					"name": "Creating",
					"value": "creating"
				},
				{
					"name": "Pending Upload",
					"value": "pending_upload"
				},
				{
					"name": "Available",
					"value": "available"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Update Image"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "manual",
			"description": "How the Image was created.\n\n\"Manual\" Images can be created at any time.\n\n\"Automatic\" Images are created automatically from a deleted Linode.\n",
			"options": [
				{
					"name": "Manual",
					"value": "manual"
				},
				{
					"name": "Automatic",
					"value": "automatic"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Update Image"
					]
				}
			}
		},
		{
			"displayName": "Updated",
			"name": "updated",
			"type": "string",
			"default": "2021-08-14T22:44:02",
			"description": "When this Image was last updated.",
			"routing": {
				"send": {
					"property": "updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Update Image"
					]
				}
			}
		},
		{
			"displayName": "Vendor",
			"name": "vendor",
			"type": "string",
			"default": "Debian",
			"description": "The upstream distribution vendor. `None` for private Images.\n",
			"routing": {
				"send": {
					"property": "vendor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Update Image"
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
						"Images"
					],
					"operation": [
						"Update Image"
					]
				}
			}
		},
];
